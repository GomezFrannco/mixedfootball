require("dotenv").config();
import express, { Application } from "express";
import config from "config";
import { serverConfigType } from "./types/config.types";

export class App {
  private app: Application;
  private port: string | number;
  constructor() {
    this.app = express();
    this.port = config.get<serverConfigType>("server").port;
    this.databaseConnection();
    this.settings();
    this.middlewares();
    this.routes();
  }
  databaseConnection() {}
  settings() {
    this.app.set("port", this.port);
  }
  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  routes() {}
  listen() {
    this.app.listen(this.app.get("port"), () => {
      console.log("🚀 listening on port:", this.app.get("port"));
    });
  }
}
