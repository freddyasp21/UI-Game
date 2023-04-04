import React from "react";

function Games() {
  return (
    <div className="grid lg:grid-cols-5">
      <div className="p-4">
        <img
          src="https://channel3.gg/img/avi/game-main-left4dead2-511-20221127095735.jpg"
          alt=""
          className="w-full h-80 object-cover rounded-xl mb-2"
        />
        <h3 className="text-gray-300">Left 4 Dead</h3>
        <p className="text-gray-500 mb-3">Horror game</p>
        <span className="text-white">$8.15</span>
      </div>
      <div className="p-4">
        <img
          src="https://cl.buscafs.com/www.levelup.com/public/uploads/images/535421.jpg"
          alt=""
          className="w-full h-80 object-cover rounded-xl mb-2"
        />
        <h3 className="text-gray-300">The Evil Within</h3>
        <p className="text-gray-500 mb-3">Horror game</p>
        <div className="flex items-center gap-2">
          <span className="bg-green-300 p-1 text-green-800 rounded-lg">
            -80%
          </span>
          <span className="text-gray-500">$50</span>
          <span className="text-white">$8.15</span>
        </div>
      </div>
      <div className="p-4">
        <img
          src="https://www.somosxbox.com/wp-content/uploads/2022/10/dead-space-remake-portada-somosxbox.jpg"
          alt=""
          className="w-full h-80 object-cover rounded-xl mb-2"
        />
        <h3 className="text-gray-300">Dead Space</h3>
        <p className="text-gray-500 mb-3">Horror game</p>
        <div className="flex items-center gap-2">
          <span className="bg-green-300 p-1 text-green-800 rounded-lg">
            -80%
          </span>
          <span className="text-gray-500">$50</span>
          <span className="text-white">$8.15</span>
        </div>
      </div>
      <div className="p-4">
        <img
          src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2017/04/outlast-trinity-caratula.jpg?itok=6u-3wPNX"
          alt=""
          className="w-full h-80 object-cover rounded-xl mb-2"
        />
        <h3 className="text-gray-300">Outlast 2</h3>
        <p className="text-gray-500 mb-3">Horror game</p>
        <div className="flex items-center gap-2">
          <span className="bg-green-300 p-1 text-green-800 rounded-lg">
            -80%
          </span>
          <span className="text-gray-500">$50</span>
          <span className="text-white">$8.15</span>
        </div>
      </div>
      <div className="p-4">
        <img
          src="https://cdnb.artstation.com/p/assets/images/images/017/202/551/large/hugues-giboire-promoart-small.jpg?1555018143"
          alt=""
          className="w-full h-80 object-cover rounded-xl mb-2"
        />
        <h3 className="">Hellblade</h3>
        <p className="text-gray-500 mb-3">Horror game</p>
        <span className="text-white">$8.15</span>
      </div>
    </div>
  );
}

export default Games;
