import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {

    const configName = 'strapi::webhook';
    const webhookName = 'Build Frontend';
    const webhookUrl = process.env.WEBHOOK_URL;

    if (!webhookUrl) {
      strapi.log.warn('WEBHOOK_URL is missing or empty. Skipping webhook setup.');
      return;
    }

    const existing = await strapi.db.query(configName).findOne({ where: { name: webhookName } });

    const data = {
      name: webhookName,
      url: webhookUrl,
      headers: {},
      events: ['entry.publish', 'entry.unpublish'],
      enabled: true,
    };

    if (existing) {
      await strapi.db.query(configName).update({ where: { id: existing.id }, data });
    } else {
      await strapi.db.query(configName).create({ data });
    }

    strapi.log.info(`Webhook "${webhookName}" is now configured.`);

  },
};
