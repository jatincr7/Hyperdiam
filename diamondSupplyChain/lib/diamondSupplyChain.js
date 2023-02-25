'use strict';

const { Contract } = require('fabric-contract-api');

const diamondObjType = "Diamond";

class DiamondSupplyChain extends Contract {

    async initLedger(ctx) {
        // Create an initial diamond supply chain state
        const diamondState = {
            id: "ABC123",
            carat: 1.5,
            clarity: "VS1",
            color: "D",
            origin: "Mines of Africa",
            status: "Mined",
            owner: "Miner"
        }

        // Put the diamond state onto the ledger
        await this._putDiamond(ctx, diamondState);
    }

    async mineDiamond(ctx, id, carat, clarity, color) {
        // Check that the diamond doesn't already exist
        if (await this._diamondExists(ctx, id)) {
            throw new Error(`the diamond ${id} already exists`);
        }

        // Create a new diamond state object
        const diamondState = {
            id: id,
            carat: parseFloat(carat),
            clarity: clarity,
            color: color,
            origin: "Mines of Africa",
            status: "Mined",
            owner: "Miner",
            history: []
        }

        // Put the diamond state onto the ledger
        await this._putDiamond(ctx, diamondState);
    }

    async shipDiamond(ctx, id, shipper) {
        // Get the current diamond state
        const diamond = await this._getDiamond(ctx, id);

        // Check that the owner is the Miner
        if (diamond.owner !== "Miner") {
            throw new Error(`Only the Miner can ship diamond`);
        }

        // Update the diamond state
        diamond.owner = shipper;
        diamond.status = "Shipped";
        diamond.history.push({ event: "Shipped", participant: shipper, timestamp: new Date().toISOString() });

        // Put the updated diamond state onto the ledger
        await this._putDiamond(ctx, diamond);
    }

    async receiveDiamond(ctx, id, receiver) {
        // Get the current diamond state
        const diamond = await this._getDiamond(ctx, id);

        // Check that the owner is the expected sender
        if (diamond.owner !== ctx.clientIdentity.getID()) {
            throw new Error(`Only the current owner can send the diamond`);
        }

        // Update the diamond state
        diamond.owner = receiver;
        diamond.status = "Received";
        diamond.history.push({ event: "Received", participant: receiver, timestamp: new Date().toISOString() });

        // Put the updated diamond state onto the ledger
        await this._putDiamond(ctx, diamond);
    }

    async polishDiamond(ctx, id, carat, clarity, color, polisher) {
        // Get the current diamond state
        const diamond = await this._getDiamond(ctx, id);

        // Check that the owner is the expected sender
        if (diamond.owner !== ctx.clientIdentity.getID()) {
            throw new Error(`Only the current owner can polish the diamond`);
        }

        // Update the diamond state
        diamond.carat = parseFloat(carat);
        diamond.clarity = clarity;
        diamond.color = color;
        diamond.status = "Polished";
        diamond.history.push({ event: "Polished", participant: polisher, timestamp: new Date().toISOString() });

        // Put the updated diamond state onto the ledger
        await this._putDiamond(ctx, diamond);
    }

    async sellDiamond(ctx, id, seller, price) {
        // Get the current diamond state
        const diamond = await this._getDiamond(ctx, id);

        // Check that the owner is the expected sender
        if (diamond.owner !== ctx.clientIdentity.getID()) {
            throw new Error(`Only the current owner can sell the diamond`);
        }

        // Update the diamond state
        diamond.owner = seller;
        diamond.status = "For Sale";
        diamond.price = parseFloat(price);
        diamond.history.push({ event: "For Sale", participant: seller, timestamp: new Date().toISOString() });

        // Put the updated diamond state onto the ledger
        await this._putDiamond(ctx, diamond);
    }

    async buyDiamond(ctx, id, buyer) {
        // Get the current diamond state
        const diamond = await this._getDiamond(ctx, id);

        // Check that the diamond is for sale
        if (diamond.status !== "For Sale") {
            throw new Error(`the diamond ${id} is not for sale`);
        }

        // Check that the buyer has enough money to buy the diamond
        const buyerBalance = parseFloat(await this._getBalance(ctx, buyer));
        if (buyerBalance < diamond.price) {
            throw new Error(`the buyer ${buyer} does not have enough funds to buy the diamond ${id}`);
        }

        // Update the diamond state
        diamond.owner = buyer;
        diamond.status = "Sold";
        diamond.history.push({ event: "Sold", participant: buyer, timestamp: new Date().toISOString() });

        // Update the buyer's balance
        await this._updateBalance(ctx, buyer, -diamond.price);

        // Update the seller's balance
        await this._updateBalance(ctx, diamond.owner, diamond.price);

        // Put the updated diamond state onto the ledger
        await this._putDiamond(ctx, diamond);
    }

    async getDiamondHistory(ctx, id) {
        // Get the current diamond state
        const diamond = await this._getDiamond(ctx, id);

        // Return the diamond's history
        return diamond.history;
    }

    async _getDiamond(ctx, id) {
        // Get the diamond state from the ledger
        const diamondJSON = await ctx.stub.getState(id);

        // Check that the diamond exists
        if (!diamondJSON || diamondJSON.length === 0) {
            throw new Error(`the diamond ${id} does not exist`);
        }

        // Parse the diamond state from the JSON format
        return JSON.parse(diamondJSON);
    }

    async _putDiamond(ctx, diamond) {
        // Convert the diamond state to a JSON string format
        const diamondJSON = JSON.stringify(diamond);

        // Put the diamond state onto the ledger
        await ctx.stub.putState(diamond.id, Buffer.from(diamondJSON));
    }

    async _diamondExists(ctx, id) {
        // Get the diamond state from the ledger
        const diamondJSON = await ctx.stub.getState(id);

        // Check if the diamond exists
        return diamondJSON && diamondJSON.length > 0;
    }

    async _getBalance(ctx, account) {
        // Get the balance for the specified account
        const balanceJSON = await ctx.stub.getState(account);

        // Check that the account exists
        if (!balanceJSON || balanceJSON.length === 0) {
            throw new Error(`the account ${account} does not exist`);
        }

        // Parse the balance from the JSON format
        return parseFloat(balanceJSON);
    }

    async _updateBalance(ctx, account, delta) {
        // Get the current balance for the specified account
        const balance = parseFloat(await this._getBalance(ctx, account));

        // Update the balance
        const newBalance = balance + delta;

        // Check that the new balance is not negative
        if (newBalance < 0) {
          // Throw an error if the new balance is negative
          throw new Error(`Not enough funds in account ${account}`);

        }

        // Update the balance state
        await ctx.stub.putState(account, Buffer.from(newBalance.toString()));
      }

    }

    module.exports = DiamondSupplyChain;
