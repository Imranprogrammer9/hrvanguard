/*
  # Create Contact Submissions Table

  ## Summary
  Creates a table to store HR Vanguard landing page contact form submissions.

  ## New Tables
  - `contact_submissions`
    - `id` (uuid, PK) - unique identifier
    - `full_name` (text) - applicant's full name
    - `email` (text) - applicant's email address
    - `service` (text) - selected service from dropdown
    - `target_role` (text, optional) - target role or industry
    - `message` (text) - applicant's message / situation description
    - `created_at` (timestamptz) - submission timestamp

  ## Security
  - RLS enabled on `contact_submissions`
  - INSERT policy: anyone can submit the form (public access for submissions)
  - SELECT policy: only authenticated users (admins) can read submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  service text NOT NULL,
  target_role text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
