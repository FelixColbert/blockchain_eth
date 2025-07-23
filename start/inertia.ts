/*
|--------------------------------------------------------------------------
| Inertia Preloaded Files
|--------------------------------------------------------------------------
|
| This file is executed during application boot. Use it to share data
| globally across all Inertia responses.
|
*/

import Inertia from '@ioc:EidelLev/Inertia';

Inertia.share({
  errors: ({ session }) => session.flashMessages.get('errors') || {},
  },
}).version(() => Inertia.manifestFile('public/assets/manifest.json'));
