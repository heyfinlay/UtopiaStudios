revoke insert on table public.lead_submissions from anon, authenticated;

grant insert (
  form_type,
  name,
  email,
  phone,
  business_name,
  website,
  marketing_opt_in,
  consent,
  source_path,
  user_agent,
  payload
) on public.lead_submissions to anon, authenticated;

drop policy if exists "Anyone can submit lead forms" on public.lead_submissions;

create policy "Lead forms can create valid submissions"
on public.lead_submissions
for insert
to anon, authenticated
with check (
  form_type in ('application', 'audit_intake')
  and payload is not null
  and jsonb_typeof(payload) = 'object'
  and length(coalesce(name, '')) <= 200
  and length(coalesce(email, '')) <= 320
  and length(coalesce(phone, '')) <= 80
  and length(coalesce(business_name, '')) <= 240
  and length(coalesce(website, '')) <= 2048
  and length(coalesce(source_path, '')) <= 2048
  and length(coalesce(user_agent, '')) <= 2048
);
