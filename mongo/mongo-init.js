db.createUser(
    {
        user: "first_db",
        pwd: "ksharkinc2022",
        roles: [
            {
                role: "dbOwner",
                db: "first_db"
            }
        ]
    }
);
