# Security Guideline Document for `heavy-equipment-consulting-profile`

This document outlines security best practices and actionable recommendations tailored to the `heavy-equipment-consulting-profile` codebase—a Next.js/TypeScript single-page company profile with CMS capabilities, Drizzle ORM/PostgreSQL backend, and admin authentication. Adhere to these guidelines to ensure the application is secure by design and resilient to common threats.

---

## 1. Security by Design & Secure Defaults

- Treat security as an integral part of every feature, from design to deployment.  
- Ship all components with the most restrictive, secure configuration by default (e.g., disallow public write access to APIs, enable HTTPS-only cookies).  
- Document and enforce a secure configuration checklist for all environments (development, staging, production).

## 2. Authentication & Access Control

### 2.1 Admin Authentication
- Use a battle-tested library (e.g., NextAuth.js) with strong defaults. Disable the `none` JWT algorithm and require signing with a robust secret or asymmetric key.  
- Enforce MFA for the admin account. Integrate SMS or TOTP-based second factors to reduce risk if credentials are compromised.

### 2.2 Password Policies & Storage
- Enforce minimum 12-character passwords with uppercase, lowercase, numbers, and symbols.  
- Hash all passwords using Argon2id or bcrypt with unique salts. Never store or log plaintext credentials.

### 2.3 Session Management
- Use HTTP-only, Secure, SameSite=Strict cookies for sessions.  
- Generate cryptographically secure session identifiers.  
- Implement idle (e.g., 15 min) and absolute (e.g., 12 hr) timeouts.  
- Rotate session identifiers upon login and logout to prevent fixation.

### 2.4 Role-Based Access Control (RBAC)
- Define an `admin` role for content management and a `public` role for read-only access.  
- Enforce server-side permission checks on every API route (e.g., only admins can `POST`, `PUT`, `DELETE` content endpoints).

## 3. Input Validation & Output Encoding

### 3.1 API Input Validation
- Use Zod or Joi schemas to validate all incoming JSON payloads on your Next.js API routes (content CRUD, contact form).  
- Reject requests with unexpected fields or data types.

### 3.2 Prevent Injection Attacks
- Use Drizzle ORM’s parameterized queries—never concatenate user input into SQL statements.  
- Sanitize any dynamic strings used in shell commands (if any).

### 3.3 XSS & CSRF Mitigation
- Encode all user-supplied content at render time in React (avoid `dangerouslySetInnerHTML` or sanitize with a library like DOMPurify).  
- Enable Next.js `@next/helmet`-style headers: `Content-Security-Policy` to restrict script sources.  
- Protect all state-changing endpoints (e.g., content updates, contact form triggers) with CSRF tokens or use the SameSite cookie attribute.

### 3.4 File Uploads (If Gallery Uploads Are Supported)
- Validate file extensions and MIME types against a strict whitelist (e.g., JPEG, PNG).  
- Enforce maximum file size limits (e.g., 5 MB).  
- Store uploads outside the webroot (or in an object storage bucket with appropriate IAM policies).  
- Scan uploads for malware using a virus‐scanning service (e.g., ClamAV).

## 4. Data Protection & Privacy

### 4.1 Encryption in Transit
- Enforce HTTPS for all requests. Redirect HTTP → HTTPS at the load balancer or Vercel config.  
- Use TLS 1.2+ with strong ciphers. Disable legacy protocols (SSLv3, TLS 1.0/1.1).

### 4.2 Encryption at Rest
- Enable encryption at rest for your PostgreSQL database (e.g., AWS RDS encryption).  
- Encrypt backups and snapshots with unique customer-managed keys.

### 4.3 Secrets Management
- Remove hardcoded secrets from code.  
- Leverage environment variables or a secrets manager (e.g., AWS Secrets Manager, HashiCorp Vault).  
- Rotate secrets regularly and audit access logs.

### 4.4 Logging & Error Handling
- Avoid exposing stack traces or PII in error messages or API responses.  
- Log only necessary metadata (e.g., request IDs, timestamps, sanitized user IDs).  
- Store logs in a central, secured log management system with limited access.

## 5. API & Service Security

- Enforce rate limiting and throttling on public and admin endpoints (e.g., 100 requests/minute/IP).  
- Restrict CORS to your production domain(s) only.  
- Version your API routes (`/api/v1/…`) to allow incremental, secure changes in the future.  
- Return the minimal payload needed (avoid exposing internal IDs or full database schemas).

## 6. Web Application Security Hygiene

- Set the following security headers in `next.config.js` or a middleware:
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: no-referrer-when-downgrade`
- For cookies: set `HttpOnly`, `Secure`, `SameSite=Strict`.
- Use Subresource Integrity (SRI) for any third-party CDN assets.
- Disable Next.js `dev` features and detailed logging in production builds.

## 7. Infrastructure & Configuration Management

- Harden your server/container images: remove unused packages, disable root login, minimize surface area.  
- Regularly apply security updates to the OS, Node.js, and all dependencies.  
- Restrict inbound network access to required ports only (e.g., 443 for HTTPS, 5432 for DB inbound from the app server).  
- Use Infrastructure-as-Code (e.g., Terraform) to manage configuration and support immutable infrastructure.

## 8. Dependency Management

- Maintain a lockfile (`package-lock.json`) and review new dependencies via an automated SCA tool (e.g., Snyk, Dependabot).  
- Remove unused or unmaintained libraries to reduce attack surface.  
- Audit for known CVEs on each pull request and require fixes or compensating controls before merge.

---

### Conclusion & Next Steps
By integrating these security guidelines throughout design, development, and deployment, you ensure that the `heavy-equipment-consulting-profile` application is resilient to common web threats, compliant with data-protection regulations, and built on a foundation of secure defaults. Regularly review and update these practices as your feature set evolves and new threats emerge.