import { Config } from 'nestjs-config-v2-test';

export default class TCPConfig extends Config {
  public port = parseInt(process.env.TCP_PORT) || null;
}
