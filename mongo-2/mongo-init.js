db.createUser(
    {
        user: "mongo",
        pwd: "ksharkinc2022",
        roles: [
            {
                role: "dbOwner",
                db: "mongo"
            }
        ]
    }
);
