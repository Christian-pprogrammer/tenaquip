FROM node:20 as builder

ARG MEDUSA_BACKEND_API
ARG STRAPI_API
ARG STRAPI_UPLOADS
ARG NEXT_PUBLIC_STRIPE_KEY
ARG NEXT_PUBLIC_PAYPAL_CLIENT_ID

ENV MEDUSA_BACKEND_API=$MEDUSA_BACKEND_API
ENV STRAPI_API=$STRAPI_API
ENV STRAPI_UPLOADS=$STRAPI_UPLOADS
ENV NEXT_PUBLIC_STRIPE_KEY=$NEXT_PUBLIC_STRIPE_KEY
ENV NEXT_PUBLIC_PAYPAL_CLIENT_ID=$NEXT_PUBLIC_PAYPAL_CLIENT_ID

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn next experimental-compile --no-lint 

FROM node:20
WORKDIR /app
COPY --from=builder /app /app
CMD ["yarn", "start"]

EXPOSE 3000

