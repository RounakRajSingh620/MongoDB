// building the database
db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
]);

db.inventory.find({}).sort({ qty: 1 }) // ascending order of qty
db.inventory.find({}).sort({ qty: -1 })   // descending order of qty
db.inventory.find({}).skip(1)  //skips first document
db.inventory.find({}).skip(2)  //skips first two documents

db.inventory.find({}).limit(1) // limits to first document
db.inventory.find({}).limit(2) // limits to first two documents


// Achieving Pagination using MongoDB find and limit
// 1 to 10
no = 8
db.blogarticles.find().skip((pageNo - 1) * no).limit(no)
pageNo = 1
db.blogarticles.find().skip((1 - 1) * 8).limit(8)
pageNo = 2
db.blogarticles.find().skip((2 - 1) * 8).limit(8)