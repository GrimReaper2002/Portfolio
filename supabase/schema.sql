-- projects table
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  tech_stack text[] not null default '{}',
  github_url text,
  live_url text,
  created_at timestamptz not null default now()
);

-- contact_messages table
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Enable RLS
alter table projects enable row level security;
alter table contact_messages enable row level security;

-- Allow public read on projects
create policy "projects_public_read" on projects
  for select using (true);

-- Allow public insert on contact_messages
create policy "contact_messages_public_insert" on contact_messages
  for insert with check (true);

-- Seed projects
insert into projects (title, description, tech_stack, github_url, live_url) values
(
  'Stubble Management System',
  'Won 1st place among 50+ teams at Hackathon 2021. A full-stack platform connecting farmers and vendors for efficient stubble transactions, featuring secure REST APIs and MySQL workflows behind a responsive React frontend.',
  array['Java', 'Spring Boot', 'MySQL', 'React', 'REST APIs'],
  'https://github.com/ramkishore-namala',
  null
),
(
  'Object Detection using CNN & Big Data',
  'Achieved 1st place at Project Expo 2021. A deep learning image recognition system detecting face masks and objects using CNNs, with Hadoop for distributed data processing on large-scale datasets.',
  array['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Hadoop'],
  'https://github.com/ramkishore-namala',
  null
),
(
  'Enterprise RAG Pipeline',
  'End-to-end Retrieval-Augmented Generation system powering an automation workflow agent at OpenText, integrating LangChain, LangGraph, and LlamaIndex with vector databases for context-grounded responses across enterprise document repositories.',
  array['Python', 'LangChain', 'LangGraph', 'LlamaIndex', 'Pinecone', 'AWS'],
  null,
  null
),
(
  'NLP-to-SQL Prompt Pipeline',
  'Engineered a semantic model that converts natural language user questions into precise, schema-aware SQL queries, enabling non-technical clients to query production data directly via Microsoft Fabric and Azure AI Foundry.',
  array['Python', 'Azure AI Foundry', 'Microsoft Fabric', 'LLMs', 'SQL'],
  null,
  null
);
