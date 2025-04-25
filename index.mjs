
import {transform} from 'oxc-transform'

const a = transform('test.js', '', {
  // use Browserlists default
	target: [
    'and_chr135',       'and_ff137',
    'and_qq14.9',       'and_uc15.5',
    'android135',       'chrome135',
    'chrome134',        'chrome133',
    'chrome132',        'chrome131',
    'chrome109',        'edge135',
    'edge134',          'edge133',
    'firefox137',       'firefox136',
    'firefox128',       'ios_saf18.4',
    'ios_saf18.3',      'ios_saf18.1',
    'ios_saf17.6-17.7', 'ios_saf16.6-16.7',
    'ios_saf15.6-15.8', 'kaios3.0-3.1',
    'kaios2.5',         'op_miniall',
    'op_mob80',         'opera117',
    'opera116',         'safari18.4',
    'safari18.3',       'samsung27',
    'samsung26'
  ]
})

console.log(a)