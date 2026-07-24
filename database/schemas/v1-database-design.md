User
Role
Permission
Session
AuditLog
Address

# LPG Connect Database Design (Version 1)

## User

| Field | Type | Notes |
|--------|------|------|
| id | UUID | Primary Key |
| firstName | String | |
| lastName | String | |
| email | String | Unique |
| phone | String | Unique |
| passwordHash | String | Encrypted |
| profilePhoto | String | Nullable |
| status | Enum | Active, Suspended, Pending |
| createdAt | DateTime | |
| updatedAt | DateTime | |

Relationships

- One User can have many Addresses.
- One User has one Role.
- One User can create many Orders.
- One User can send many Messages.

## Role

| Field | Type |
|--------|------|
| id | UUID |
| name | String |
| description | String |

Relationships

- One Role has many Users.

## Permission

| Field | Type |
|--------|------|
| id | UUID |
| name | String |
| description | String |

User
 │
 ├── Role
 │
 ├── Address
 │
 ├── Orders
 │
 ├── Wallet
 │
 ├── Notifications
 │
 └── Messages