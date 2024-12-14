# Etap 1: Build stage
FROM node:18-alpine AS builder
ARG VERSION
ENV AUTHOR="Lukasz Likos"
ENV APP_VER=production.${VERSION:-v1.0}
WORKDIR /app
COPY src/package*.json ./
RUN npm install
COPY src/ .

# Etap 2: Runtime
FROM node:18-alpine
ARG VERSION
ENV AUTHOR="Lukasz Likos"
ENV NODE_ENV=production
ENV VERSION=${VERSION:-v1.0}
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD curl --silent --fail http://localhost:8080 || exit 1
CMD ["node", "index.js"]
