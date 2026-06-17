create table if not exists public.lead_submissions (
  id uuid primary key default gen_random_uuid(),
  form_type text not null check (form_type in ('application', 'audit_intake')),
  name text,
  email text,
  phone text,
  business_name text,
  website text,
  marketing_opt_in boolean,
  consent boolean,
  source_path text,
  user_agent text,
  payload jsonb not null check (jsonb_typeof(payload) = 'object'),
  created_at timestamptz not null default now()
);

alter table public.lead_submissions enable row level security;

drop policy if exists "Anyone can submit lead forms" on public.lead_submissions;

create policy "Anyone can submit lead forms"
on public.lead_submissions
for insert
to anon, authenticated
with check (true);

grant usage on schema public to anon, authenticated;
grant insert on table public.lead_submissions to anon, authenticated;
grant select, insert, update, delete on table public.lead_submissions to service_role;
