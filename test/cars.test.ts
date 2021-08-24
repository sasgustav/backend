import request from "supertest";
import app from "../src/server";

describe("Cars Endpoints", () => {
  it("should return list cars", () => {
    return request(app).get("/cars")
      .expect(200);
  });

  it("should return show car by id", () => {
    return request(app).get("/cars/1")
      .expect(200);
  });

  it("should be able to create a new car", async () => {
    const response = await request(app).post('/cars')
      .send({
        placa: "ABC-1236",
        chassi: "s47hx3btzqfx",
        renavam: "144003058",
        modelo: "AZERA GLS 3.3 V6 24V 4p Aut.",
        marca: "Hyundai",
        ano: "2011-1"
      })

    expect(response.body)
    expect(201)
  });

  it("should return 204 if succes delete only car", () => {
    return request(app).delete("/cars/6")
      .expect(204);
  });

  it("should return 204 if succes update field", async () => {
    return request(app).put('/cars/1')
      .send({ placa: "ABC-1226" })
      .expect(204)
  });
});
