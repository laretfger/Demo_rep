-- CreateTable
CREATE TABLE "Entities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "equipment" TEXT NOT NULL,
    "type_of_fault" TEXT NOT NULL,
    "description_problem" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "status_update" BOOLEAN NOT NULL DEFAULT false,
    "master" TEXT NOT NULL,
    "date" DATETIME NOT NULL
);
