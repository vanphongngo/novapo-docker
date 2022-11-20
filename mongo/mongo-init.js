db.createUser(
    {
        user: "quan5",
        pwd: "quan5_password",
        roles: [
            {
                role: "dbOwner",
                db: "quan5"
            }
        ]
    }
);
