const mqtt = require('mqtt');
const dotenv = require('dotenv');

dotenv.config();

const brokerUrl = process.env.MQTT_BROKER_URL || 'mqtt://broker.example.com'; // Broker URL
const options = {
  username: process.env.MQTT_BROKER_USERNAME, // User MQTT
  password: process.env.MQTT_BROKER_PASSWORD, // Password MQTT
};
const qtSensors = process.env.SENSORS_TO_CREATE || 1;
const alias = process.env.DEVICE_IDS || 'SensorAlias';

const sensors = [];

for (let i = 0; i < qtSensors; i++) {
    const element = {
      id: i,
      name: `${alias}-S${i}`,
    };
    sensors.push(element);
  }

console.log(`Starting connection to ${brokerUrl}...`);

const client = mqtt.connect(brokerUrl, options);

const topic = process.env.MQTT_TOPIC || 'default_topic';


function generateRandomTemperature() {
  return Math.random() * 50; 
}


setInterval(() => {
  sensors.forEach((sensor) => {
    const temperature = generateRandomTemperature();
    const payload = JSON.stringify({ id: sensor.name, temperature });
  
    client.publish(topic, payload, (error) => {
      if (error) {
        console.error('Error:', error);
      } 
    });
  })  

}, 5000);


client.on('connect', () => {
  console.log('MQTT Broker Connected');
});

client.on('error', (error) => {
  console.error('MQTT Connection error:', error);
});
