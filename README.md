# FakeSensor - MQTT Sensor Simulator

This repository contains a Node.js program that simulates multiple MQTT sensors and publishes random temperature readings to a broker.

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root directory and provide the following variables:

   ```plaintext
   MQTT_BROKER_URL=mqtt://broker.example.com
   MQTT_BROKER_USERNAME=<mqtt-broker-username>
   MQTT_BROKER_PASSWORD=<mqtt-broker-password>
   SENSORS_TO_CREATE=1
   DEVICE_IDS=SensorAlias
   MQTT_TOPIC=default_topic
   ```

   Replace the values accordingly with your MQTT broker details.

## Usage

1. Start the program by running the following command:

   ```bash
   npm start
   ```

   The program will connect to the MQTT broker and start publishing random temperature readings every 5 seconds for the specified number of sensors.

2. Monitor the program output to check the connection status and any errors that may occur.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open a new issue or submit a pull request.

## License

This code is licensed under the [MIT License](LICENSE).