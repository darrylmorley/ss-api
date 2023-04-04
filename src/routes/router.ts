import { Router } from "express";

const router = Router();

router.get("/products", () => {});
router.get("/product/:id", () => {});
router.put("/product", () => {});
router.post("/product", () => {});

router.get("/categories", () => {});
router.get("/category:id", () => {});
router.put("/category:id", () => {});
router.post("/category");

router.get("/brands", () => {});
router.get("/brand/:id", () => {});
router.put("/brand/:id", () => {});
router.post("/brand", () => {});

router.get("/images", () => {});
router.get("/image/:id", () => {});
router.put("/image/:id", () => {});
router.post("/image", () => {});

export default router;
