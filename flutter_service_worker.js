'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "9bb4a72ee6ab4fc191bcdc352fe82aee",
"index.html": "165b3307aeda37b1e787865ecafc65a6",
"/": "165b3307aeda37b1e787865ecafc65a6",
"main.dart.js": "4c208a3c1e27bc09fa5d49bff8f3c188",
"version.json": "934b986c11a6508ee3fd1a565d969823",
"assets/fonts/MaterialIcons-Regular.otf": "fe54b97a8e378505d35993dacf488c0e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/NOTICES": "df572f8f52da02f63b075826120e644f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "be63fc9ec054f5706fb8198d9ffb61ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3e3b74d84228df7679307b963c138758",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/sendemail-validate.sample": "c4c26785acacb2553117cf802723d09f",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "46dd4730a071b70bfdf6f59f7268f435",
".git/refs/remotes/origin/main": "46dd4730a071b70bfdf6f59f7268f435",
".git/objects/5c/13ff883544d5ad55b5da809fdbf97c5d66bfc6": "c1c1687bf46b7d08cfe97636de73297a",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "e7f9f3e6858cd8b209d63ba4f6bfe676",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "8dc17a1a39be3d8b49f69908fc6040b7",
".git/objects/d2/f3b8e072f4412345ffc771f14f1d6e7b43fc7e": "35ab428788f8eddbb1901a14a39d5561",
".git/objects/08/b18860a07836ce077db95e7ba15e6f2c7dce5d": "27d1a96c9a669dce2a8df417c252142d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "c61efd0b2feea66b7e3396ea660bc62b",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "a0c4fa1c53d08453b4406e4da9e6f57d",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "67e10bf48fa1111de78581ef020e5402",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "29788e151107ea62f2f774edfd3a5713",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "5ea93da037ba8be3509f1cdddb277858",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "0a8491fd573a58b5f1b86ac992f53783",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "1b1d0a54ee336fe66e6b7333703dc06f",
".git/objects/29/f2edb7af81910680a9b32d021f5898c8e1efd2": "74c565423aab746abe625d0dcf5c475d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "f2fecd4838966d802863f3665a682dc7",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "6c192f396764373122d3ea37bd0caff5",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "fdc0d0240d89fb5f2debbe4987d9ae26",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "416abd70f30c36fe65d6b7f4ac6c9ca8",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "7bab37dae639a2b3ddd3ac35c3ff1138",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "2e3ad7cdd4c3f033a3606f21dfae8c55",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "56f0b31ef9652258b914a49e31ae8676",
".git/objects/60/5287a51527721ea959dfc8a50b74104913e761": "26d2fa68d73d928c45f74602e5af3ea1",
".git/objects/60/dadd5d8c7910179bbaf68dfc09c59e5aea275c": "add928b3b9cf7a0a7a8d5d727fed688e",
".git/objects/4a/a003d53860c70c94e01ca274ffabc0c8bb2814": "e6c50cc2dccf5e459d72703cc23c238d",
".git/objects/4a/75f659aafffc021ede50d71e5199f9b5256d9e": "0c180e6e5f024a3e57bc5b280ff1821d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "bc522999155f18b4a88627a6079c0e2b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "53865af4f80b7c4a4b086d24433b0303",
".git/objects/88/4bf7ca47f35ce2c1f74bceef779759fc6f89a7": "0811e4ad1476ffd037858326a6fc4fd9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "0662e7cbe81df961ba8a36c819f471d3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "d2eb7b4070ad770bdf75e1be4265beec",
".git/objects/33/0fa6948477b5ec86942a8d9665b60567c75df4": "d5e36c4aff08d5330b09256b3ac45ccf",
".git/objects/87/f48a217d4953ffa5e71733e310466ef4317851": "e99b63a3c8034366f0c6d89bfa388bdc",
".git/objects/1f/566bc41e418845467b51dca1bd56086be7a278": "57fbbd0b1d675871de4e69950d52e18f",
".git/objects/47/6e21f3d2f5c061c30900473880f3980f9a31ea": "6107ff491808fe6c423eebfa39d7b783",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/13/bd636c4e31610f38dcef2907194ad4d85640dc": "99502df0328f532872882c7e8f11e22b",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "469d11f794c5cd4b1f4242f41a6f74dd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d7/284cb76e21c6aa323f1158b020220b376c6641": "53974cb9a2d31b6aa5fe1232db7fa5c6",
".git/objects/2e/e1df5a9d3d4fa35bf135d775e268a61da40a27": "687c4d50594a1416216be7653a321924",
".git/objects/2e/9423c8d9494dedcc23dde2f50931df47ef1d52": "0e8cc267781840122315b2bdba14329c",
".git/objects/25/d43b161ade5c9fb7b87512ebef4f33c9851498": "2f97657590e87ab9a9fee3acbc356643",
".git/objects/a7/86de55613b7a70e126c67ea75c8f22d4290cc4": "49a4c0a4cdd0ba2a99499690fd3cdfcc",
".git/objects/51/244c93433da0969520c7513a507b8578c44a8e": "b8d5352cca2a2afd369b80cca76c7336",
".git/objects/81/85158b0b62d0e6fb4c45a1168666cfbb8c6a5a": "e33c713a9867661c553688ca559fe03d",
".git/objects/9d/d99786016e477eda3a9e832a911d234261e6c2": "a079f33084853f0a4618fd287f6b32f4",
".git/objects/10/f22db6d7249bf6ef34977ae771aabcaee19478": "dedb0e236929426306726a4a519e41d2",
".git/COMMIT_EDITMSG": "f6b1b6bd7870f37a1cd19074837116f0",
".git/logs/HEAD": "19c0e4601e6442c2ffe20642b1f34231",
".git/logs/refs/heads/main": "6e6a667fbb18b0e2ca49961d6a1b4c12",
".git/logs/refs/remotes/origin/main": "63fa2c592f7bdf45b1b45bbce3ff0fea",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "29867d9e0c80e089b17a346d2e10b84f",
".git/index": "88ef0bb6ce05f86e12335f607157ed5d"};
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
