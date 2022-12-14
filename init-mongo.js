db.rawData.insertOne({
	date: '1.1.2022',
	time: '01:01',
	high: 120,
	low: 80,
	puls: 70,
	lek: '2.5mg RaliLich@0:0',
	start: 1,
});

db.createUser({
	user: 'test',
	pwd: 'tset',
	roles: [
		{
			role: 'readWrite',
			db: 'pritiskovnik',
		},
	],
});
