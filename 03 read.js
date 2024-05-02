// Returns all documents in the inventory collection.
db.inventory.find()

// Returns all documents where the category field is equal to "Event".
db.inventory.find({ category: "event" })

// Returns all documents where the status field is equal to "A" or "D".
db.inventory.find({ status: { $in: ["A", "D"] } })


// AND
// Returns all documents where the status field is equal to "A" and the qty field is less than 30.

db.inventory.find({ status: "A", qty: { $lt: 30 } })
// OR 
// Returns all documents where the status field is equal to "A" or the qty field is less than 30.
db.inventory.find({ $or: [{ status: "A" }, { qty: { $lt: 30 } }] })  