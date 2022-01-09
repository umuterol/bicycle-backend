const db = require("../models");


const identity_status_type = [
    {
        id: "confirmed",
    },
    {
        id: "unconfirmed",
    },
    {
        id: "blocked",
    }
]

const wallet_transaction_type = [
    {
        id: "add",
    },
    {
        id: "buy",
    },
    {
        id: "earn",
    }
]

const bicycle_status_type = [
    {
        id: "using",
    },
    {
        id: "parked",
    },
    {
        id: "defective",
    }
]

const drive_transaction_type = [
    {
        id: "started",
    },
    {
        id: "finished",
    },
]

const drive_status_type = [
    {
        id: "active",
    },
    {
        id: "notactive",
    },
]

const bicycles_transaction_type = [
    {
        id: "mining"
    },
    {
        id: "withdraw"
    },
]

const identity = {
    phone: "+05414451016",
    tc: "10655892646",
    name: "Umut Can",
    surname: "EROL",
    birth: "1984-02-02",
    email: "umut@gmail.com",
}


const bicycle = [
    {
        id: "ffffff",
        price: "0.55",
        owner: "10655892646",
    }
]


const bicycle_coords = [
    {
        bicycle_id: "ffffff",
        lat: 36.5152,
        lng: 36.85192577777,
    }
]

const defaultDatabaseDataHandler = async () => {
    await db.identity_status_type.bulkCreate(identity_status_type);
    await db.wallet_transaction_type.bulkCreate(wallet_transaction_type);
    await db.bicycle_status_type.bulkCreate(bicycle_status_type);
    await db.drive_transaction_type.bulkCreate(drive_transaction_type);
    await db.drive_status_type.bulkCreate(drive_status_type);
    await db.bicycles_transaction_type.bulkCreate(bicycles_transaction_type);
    await db.identity.create(identity);
    await db.bicycle.bulkCreate(bicycle);
    await db.bicycle_coords.bulkCreate(bicycle_coords)
}

module.exports = defaultDatabaseDataHandler;