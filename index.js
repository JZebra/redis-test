const redis = require("redis");

async function main() {
  console.log("starting client");
  const client = redis.createClient();

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();
  console.log("client connected");

  try {
    // await client.set("foo", "bar");
    // const value = await client.get("foo");

    const value = await client.get(
      "lita:handlers:deploy_review_app:reviewapp_app_name"
    );

    console.log("getting key");
    console.log(value);
  } catch (err) {
    console.error(err);
  } finally {
    await client.quit();
  }
}

main();
