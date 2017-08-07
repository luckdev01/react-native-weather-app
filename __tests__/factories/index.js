import { factory } from 'factory-girl';
import bluebird from 'bluebird';
import orm from '../../src/models';
import { ReduxORMAdapter } from '../utils';

factory.define('WeatherInfo', 'WeatherInfo', {
    id: factory.sequence(n => n),
    previsionText: factory.chance('sentence'),
    iconId: factory.chance('natural', { min: 1, max: 40 }),
    temperature: factory.chance('integer', { min: -40, max: 40 }),
});

factory.define('City', 'City', {
    id: factory.sequence(n => n),
    type: factory.sequence(n => `City${n}`),
    name: factory.chance('city'),
    country: factory.chance('country'),
    weatherInfo: factory.assocMany('WeatherInfo', 3, 'id'),
});

export default factory;
