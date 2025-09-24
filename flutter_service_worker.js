'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "dc2c79d7741b2a40c35981778abca948",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b21d277ce47ebc05d0c0a1d479f2b979",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5e9abbba1df6548b93500f85b0e80f21",
".git/logs/refs/heads/master": "5e9abbba1df6548b93500f85b0e80f21",
".git/objects/01/32c0c621e96357c254deb95f2ef7495e428cec": "ad0c111f62449dcb7673904dc9048422",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/09/07d808bf82934a235618265da388fb4a97bac2": "a7b4a5454c020e8d2d6adf449d595f55",
".git/objects/0e/2e715acfff2e82de6bcb03c577d7ca8a48b0c0": "7f9ddcb464839ac8f35a12b119048555",
".git/objects/12/41f576f781f5e508b9f188ccd8d8d756a98b75": "51a0a3acd94913f04824cfe935285c09",
".git/objects/1a/7cb87a391eb0fc24db9396ac0203455c106fde": "a281a9ab532f2022c8b4040e8abea5b9",
".git/objects/21/30aa517a70f62a0b0fedef65e8c3181aefbf62": "afa07fec7801993a09ad62e60b418bfc",
".git/objects/2e/70e2250da459656378631de3c44bc3a96bd755": "1f0dca73c3205446df5c49e4bf3fec79",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/56ba9b1bb60e98d09e33d609c275e16f22e70e": "fa6e71e451c30fcff76ff2a0a2de4a9d",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/a2b9d5ef5e4b238b8d1e1b943ae81d3f1aa07e": "27b2b179d2747139c89782f467e69843",
".git/objects/3a/ab3398fdc0b909ccf01f1f002e3d178754f250": "c7d65b3f97cedd75d54d5161848744ca",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/9bd2e9ba31bc7730e692842da9f436465d324c": "26eb6407ee55c8041a0e1461d75cc5db",
".git/objects/43/5c4a39ad3eefb19ae7de9d5c3aa7ac386755d0": "a4ce4401e77093657547251a38a47ff5",
".git/objects/43/839e6a58d7848d6ef13a4ee9885ec4c6092c5f": "425285bb84f0cd94add889e41d9a2c4d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/0b21e0ce17f004a7d2af04460991c2b08fddb7": "6c99300bb0221fd26b6af0886d4a7fc4",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/3ae7f21e85538a8b4889024ccd0d168f856a69": "201f00ea99586acf18c89fa5264cc598",
".git/objects/51/afb5c2ff65a3f63ac98c6618b60a2759d4a2ca": "3f92160fc2f8be3d5adee2d29038c140",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6b/7c61ca352d78450d73195f49f67d671392f103": "760213ff5f81a363a0a63aad6664876b",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/bbc3dd4a4e4ed36493157ecec48b481ab12d91": "6ee6f60c94250e34a3101dcc06082b6b",
".git/objects/6c/052598fe080f5126fa817b59997f51731a4932": "3e6b91c4eba7d83696e561412e9c8ab2",
".git/objects/71/1109eb5f607f59a40152c8a479471ee929ccd6": "d36e6a903f796bc859190723cbf884bd",
".git/objects/80/42dff6f18327f8a3c9c110a7e1bbbabefd2799": "219abbde27189c80f266187892062828",
".git/objects/85/ce7966ef72c628c859c3bd6dfab424a7c460b0": "59803984c0ed140959d3e0a73eab68e5",
".git/objects/8a/11720e28f967b48d8ec4b19126620816fa2025": "df11334ec15a770ee64c903cb7d105a6",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/9b/89d0c79fd81e5d993238ba63fe9c5e108009d7": "67c6f0c4bb18c29e1ed33028585e48dc",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/59ef2cf92184bd3a604e9fa6e0cfc0d4c7c80a": "ecccd8b340e5c5c0578071bb3f0c73e7",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ac/0e71e973f70a1fb1de0b1085bdb641905be38b": "5ddb53d9eb20f5b5b5798c68b5dbc34a",
".git/objects/b5/9e6455aab00d1c283be8ca523a2434003366e7": "477dbe3d051fb8b08f9d76b7414b8cab",
".git/objects/b5/9edc6ca7bc43636d1869177f3463badad7f3cc": "00ad45d914e170b7a14e126fbb351964",
".git/objects/b6/fb490e5808450e80c0038ad4b6fc5c615ce96b": "e0324e94305aeed2f559540a63f55f55",
".git/objects/b7/e784a9a5e4bf8f28df381eb1a8c3f5c51c40eb": "5232175ed8506201c045027a093eca8b",
".git/objects/bc/5586068e9907b668866c8e742d56656160bc5f": "c5a5064d9530713a87929539c3061076",
".git/objects/c3/b2589b85e4974dcc1ba5e4af98f226c7590021": "f7d79e2ecd73daaca503819a16d47643",
".git/objects/cc/a2960f76434eca0eea387d616f64c01f9e2924": "9e73916703f4ee414006293c0f4fbba8",
".git/objects/cc/cbf6289f6c5124dbcdede27aba3a263c0a35ef": "937c92f160ef3dd6c66d487d53aabc20",
".git/objects/ce/b62011d961b93283decf628e6fc05d3412d2f9": "e5c93c99a8c6dfc785cc943bbae6683c",
".git/objects/cf/f9a0961b94f744b83f51c28f3320dcaab73e47": "20fd2a071011f0166336fe98190eff3e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e7/15d23bf1f2f2eb4c9f2eaa63fb27f2166a2617": "4a38f89e1fa586d691a131a43c625f5f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/master": "f71b71d228aef1247e02b8c2f1899ffe",
"assets/AssetManifest.bin": "6f642d97ab2e744e1db0952d041d1924",
"assets/AssetManifest.bin.json": "d201671aab07ac37ebf6fcea629e3769",
"assets/AssetManifest.json": "fb16c66d20c9ba7670e4329ac870bfe4",
"assets/assets/check.json": "b8f93e71e48bd05b0780731d343d7eba",
"assets/assets/gif/orderplaced.gif": "29cf0619ea8f5d9afb84eef5c6f0d820",
"assets/assets/jpg/logo.jpg": "483f14c65667d35415e1e8557f77606f",
"assets/assets/png/food1.png": "9a5a38914b9bd182a3e6396ac3ed0201",
"assets/assets/png/logo.png": "a38e385dff93dd87f208afcb9eae6c40",
"assets/assets/png/logokiosk.png": "c0eddc9d7586b799f87d3f4956642d1a",
"assets/assets/svg/lang.svg": "59b7c3e9f8880050b33c36ebcb351ed8",
"assets/assets/svg/logo.svg": "21a4b2cd27e8aa79eebdb2b721c24e13",
"assets/assets/svg/noimage.svg": "9e8703cb8b22201fc2abacea6547d4bd",
"assets/assets/svg/passwordbeta.svg": "666f75912aefdcd45226d227498f1a25",
"assets/assets/svg/trash.svg": "9871f50eb144105e848c3137d1cac0c1",
"assets/assets/svg/userbeta.svg": "f64446b5fe98c475ec48222087e60fe0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a7298b4c00802bfad402467775dfb48b",
"assets/NOTICES": "e710c35383c84b4b3476ff0cec320095",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "a40dd5618ca3353a32aa26e84b638307",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "dc6a02310eec10d4d9d327efc0f92c43",
"icons/Icon-192.png": "fc0cfef1289784083a8d2bc74b2dc913",
"icons/Icon-512.png": "9e3f1fe08c01dd3d12043b23155aa981",
"icons/Icon-maskable-192.png": "fc0cfef1289784083a8d2bc74b2dc913",
"icons/Icon-maskable-512.png": "9e3f1fe08c01dd3d12043b23155aa981",
"index.html": "b357563a04ea7975408d0cae5e4f3716",
"/": "b357563a04ea7975408d0cae5e4f3716",
"main.dart.js": "f6092ecb50e20b4882f1dc0dc2f8fb53",
"manifest.json": "884155a897c55908e96f623a15ff8bd2",
"version.json": "2fb8d018b1aaf8010f7cabdee2be5fcc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
