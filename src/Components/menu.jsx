import React from "react";

const Menu = () => {
  return (
    <div
      name="Menu"
      className="w-full h-screen bg-gradient-to-b from-red-400 to-white z-0 flex items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col text-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#e7af00] text-red-700">
            {" "}
            Menu{" "}
          </p>
        </div>
        <div>
          <div className="bg-[#e7af00] rounded-lg p-6 shadow-lg max-w-screen-lg flex-1">
            <p className="text-xl text-red-700">
              BREAKFAST TACOS $8 for 2
            </p>
            <p className="text-xs text-black">
              Egg, Chorizo and Cheese Ham, egg and cheese. Served with Salsa
            </p>
            <p className="text-xl text-red-700">LOADED NACHOS $10</p>
            <p className="text-xs text-black">House made chips with Choice of meat, cheese, salsa</p>
            <p className="text-xl text-red-700">
              LUNCH/DINNER TACOS $10 for 3
            </p>
            <p className="text-sm text-black">
              BEEF, PORK, CHICKEN, STEAK. CHORIZO, THE RANCH(chorizo and beef combined), PORTOBELLO
            </p>
            <p className="text-xs text-red-700">
              *all tacos served with Onion, Cilantro and Salsa and a side of
              Beans
            </p>
          </div>
          <div className="bg-[#e7af00] rounded-lg p-6 shadow-lg max-w-screen-lg flex-1">
            <p className="text-xl text-red-700">SIDES</p>
            <p className="text-sm text-black">PINTO BEANS $2</p>
            <p className="text-sm text-black">CHIPS AND SALSA $5</p>
            <p className="text-sm text-black">GUACAMOLE $3</p>
            <p className="text-xl text-red-700">EXTRAS</p>
            <p className="text-sm text-black">CHEESE $4</p>
            <p className="text-sm text-black">DOUBLE MEAT/ CHICKEN/PORTOBELLO $4</p>
            <p className="text-xl text-red-700">SWEET TREAT</p>
            <p className="text-sm text-black">SMALL BOX OF</p>
            <p className="text-sm text-black">CHURROS WITH</p>
            <p className="text-sm text-black">NUTELLA $5</p>
            <p className="text-xl text-red-700">DRINKS</p>
            <p className="text-sm text-black">SODA $4</p>
            <p className="text-sm text-black">WATER $2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
