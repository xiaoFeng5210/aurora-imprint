import { MidwayConfig } from '@midwayjs/core';
import { Photo } from '../entity/photo.entity';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1706595010952_6300',
  koa: {
    port: 7001,
  },
  typeorm: {
    dataSource: {
      default: {
        /**
         * 单数据库实例
         */
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'xiaofeng',
        password: '',
        database: 'aurora-note-dev',
        synchronize: true,     // 如果第一次使用，不存在表，有同步的需求可以写 true，注意会丢数据
        logging: false,
        // 配置实体模型
        entities: [Photo],
      }
    }
  },
} as MidwayConfig;
