importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"f5a55d86349ecbe16f9f3d446c23a93e","url":"contributors.html"},{"revision":"a0a43b2c45445f4ac49960c45030ccbd","url":"feedback.html"},{"revision":"d21daceba5bee44a907e7653009e01b9","url":"images/forceOnElement.png"},{"revision":"e9845bc36f76585e2552b532cb9f08c6","url":"images/p1.png"},{"revision":"39902a780e7fbe5b165f4c972e5d60cf","url":"images/p10.png"},{"revision":"998e5a3d8e8e96bf854b0968d961e11d","url":"images/p2.png"},{"revision":"60190a8b75782704fbc5d45765c5ea3a","url":"images/p3.png"},{"revision":"bc7c5bc20fe5f06075e91a6cadf9f9dc","url":"images/p4.png"},{"revision":"442990b5d69dd58ffd78f7cb2874c1c4","url":"images/p5.png"},{"revision":"7f33e3066386b474c990d4370796373c","url":"images/p6.png"},{"revision":"22519c674e7de470ef1a33056a92fd82","url":"images/p7.png"},{"revision":"c9775e64043f22562bf25a28a1f787ed","url":"images/p8.png"},{"revision":"5cfb3bb0398c106d764b58aa492e2c9e","url":"images/p9.png"},{"revision":"3f1aac3eeb7fba14bab059d388a0cca9","url":"images/proc_1.png"},{"revision":"12a13ffd5e52d9edde4947304944ab25","url":"images/proc_10.png"},{"revision":"17c6df02e2def18b73e3d4cb4181e8f8","url":"images/proc_11.png"},{"revision":"dab5519d877efaf28e18b998cd27ba8e","url":"images/proc_12.png"},{"revision":"8b8e8c65c32294155972b08113ea5c3a","url":"images/proc_13.png"},{"revision":"43323f897d0cd97205b7350e75b5b60a","url":"images/proc_2.png"},{"revision":"042f5af8582cf00c7d74c940de9a971c","url":"images/proc_3.png"},{"revision":"03a14492895854a22da25047ba031456","url":"images/proc_4.png"},{"revision":"2c56e172a831d1abc4603683ee608f72","url":"images/proc_5.png"},{"revision":"e6a945bc926af292ed66a5f757980a6f","url":"images/proc_6.png"},{"revision":"4918814b0821768372a465b9e46da296","url":"images/proc_7.png"},{"revision":"a11fe984ddb0804847db2bb5fc562811","url":"images/proc_8.png"},{"revision":"6ecee7979fe39d93babefc1c0fa86161","url":"images/proc_9.png"},{"revision":"8fe4551ded1e5173c51a1260f52e7298","url":"images/t1.jpg"},{"revision":"f560412ce6e655cadb9166663b82c7b5","url":"images/t2.jpg"},{"revision":"ecf18e531c5a9d85efabe2a1e0f1898e","url":"images/t3.jpg"},{"revision":"c4ec5b113af621c406fec30c54dd7ef7","url":"images/t4.jpg"},{"revision":"25de3546ddcc13372ee81fb8c65237cf","url":"images/t5.jpg"},{"revision":"e8fb14201cd6fb0470498bf675efdea2","url":"images/t6.jpg"},{"revision":"01f98d5ab8284028f1afb69c61f6b65e","url":"images/t7.jpg"},{"revision":"14377d0e50044c2c355714ed90555fc4","url":"images/t8.jpg"},{"revision":"a6750c3c148b6d3ca1d9bee35d5e53c5","url":"images/venturimeter.png"},{"revision":"f88e11ec0afac9906cfadb1b73087368","url":"index.html"},{"revision":"0745118615b2bca7188d8c31e202e918","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"1c7270b432aa4ec60ed5d0f9e883e4c0","url":"posttest.html"},{"revision":"e28e02fc7e9044e45040d6d2ca169ef5","url":"posttest.json"},{"revision":"edebc5b9c82032563016ec0023ef2e41","url":"pretest.html"},{"revision":"2fae7d1f7d4a6d1d40ab96e4e37be135","url":"pretest.json"},{"revision":"bf705e989f457c17b529da989b2c0af0","url":"procedure.html"},{"revision":"898c0eb73ad66686081fd88c124bb166","url":"references.html"},{"revision":"2f93f2302f7cc810b67f02fa08b7cb4d","url":"simulation.html"},{"revision":"199bda46ae46ec95f5ab4391e7ec3a64","url":"simulation/common_libraries/css/style.css"},{"revision":"39445a9b72b8cd276fcd7a0e85f14b05","url":"simulation/common_libraries/js/ts_components/collapse_step.js"},{"revision":"f14f7f2e8038186a9bcd65961f911b29","url":"simulation/common_libraries/js/ts_components/geometry.js"},{"revision":"78930881cdb527fa7e809f14d6ae2ede","url":"simulation/common_libraries/js/ts_components/matrix.js"},{"revision":"4535ea022f115cef58492aa71ab62cc1","url":"simulation/common_libraries/js/ts_components/pannel.js"},{"revision":"9230278de718c3e2a5d9f2f87390de5c","url":"simulation/common_libraries/js/ts_components/questions.js"},{"revision":"1e29160b9e25358aa129e2ba76c57f3f","url":"simulation/common_libraries/js/ts_components/scene.js"},{"revision":"20967a9be8a62c5c9d1c3e8d7e330f8d","url":"simulation/common_libraries/js/ts_components/tables.js"},{"revision":"e3aee782fc14a2310cdffd083fdfce8f","url":"simulation/common_libraries/js/ts_math_library/general_math_functions.js"},{"revision":"75c1b6ecc7b07770bdc2e4692bb4d941","url":"simulation/common_libraries/js/ts_math_library/regression.js"},{"revision":"7e49bc276244b7d39353a6a67114b541","url":"simulation/common_libraries/math.ob.js"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"55ea4554820a62bd0f1af0f626bbc909","url":"simulation/index.html"},{"revision":"3aa1c6ddfb13f6c4e00a71a08dd1947f","url":"simulation/js/activity1.js"},{"revision":"84637154f942005619ebbfe8c7d2c310","url":"simulation/js/activity2.js"},{"revision":"6c4a18b1580d9c69c2bed6893b7b5899","url":"simulation/js/data.js"},{"revision":"e3081cd3dd9b9ba4c057d4ea3f50f450","url":"simulation/js/gauss_ele.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"2949a0a675e0e2a3c0623669d658936e","url":"simulation/js/screen_size.js"},{"revision":"b8f9adff16a0832a331537334362d094","url":"simulation/js/trap.js"},{"revision":"ec633dc4d967a6cbf5aa573d9efa9cc3","url":"theory.html"},{"revision":"f3abf43d24453d617892c4faf2540a7d","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );