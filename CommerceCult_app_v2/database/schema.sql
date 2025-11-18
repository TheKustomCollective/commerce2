
-- PostgreSQL schema for CommerceCult_app_v2 (basic)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  stripe_price_id TEXT UNIQUE,
  name TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  stripe_session_id TEXT UNIQUE,
  user_id INTEGER REFERENCES users(id),
  amount_cents INTEGER,
  currency TEXT,
  status TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
