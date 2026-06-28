-- CreateTable
CREATE TABLE "users" (
    "uuid" TEXT NOT NULL,
    "google_id" TEXT,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "onboarding" BOOLEAN NOT NULL DEFAULT false,
    "photo_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "tourist_places" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "latitude" TEXT,
    "longitude" TEXT,
    "address" TEXT,
    "photo_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tourist_places_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "tourist_categories" (
    "uuid" TEXT NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "tourist_categories_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "tourist_place_categories" (
    "tourist_place_id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,

    CONSTRAINT "tourist_place_categories_pkey" PRIMARY KEY ("tourist_place_id","category_id")
);

-- CreateTable
CREATE TABLE "tourist_images" (
    "uuid" TEXT NOT NULL,
    "tourist_place_id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "tourist_images_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "tourist_place_categories" ADD CONSTRAINT "tourist_place_categories_tourist_place_id_fkey" FOREIGN KEY ("tourist_place_id") REFERENCES "tourist_places"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tourist_place_categories" ADD CONSTRAINT "tourist_place_categories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "tourist_categories"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tourist_images" ADD CONSTRAINT "tourist_images_tourist_place_id_fkey" FOREIGN KEY ("tourist_place_id") REFERENCES "tourist_places"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
