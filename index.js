import Plugin from '@structures/plugin';
import { getByProps } from '@webpack';

const Lodash = window._;
const Stream = getByProps('ApplicationStreamFPSButtons');

export default class ScreenshareCrack extends Plugin {
   start() {
      const requirements = Stream.ApplicationStreamSettingRequirements;
      this.original = Lodash.cloneDeep(requirements);

      for (let i = 0; i < requirements.length; i++) {
         for (const key in requirements[i]) {
            if (!~['resolution', 'fps'].indexOf(key)) {
               delete requirements[i][key];
            }
         }
      }
   };

   stop() {
      Stream.ApplicationStreamSettingRequirements = this.original;
   }
};
