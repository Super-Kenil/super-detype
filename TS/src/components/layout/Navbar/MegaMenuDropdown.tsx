import Link from 'next/link'
import { LuChevronDown, LuChevronRight } from 'react-icons/lu'

const MegaMenuDropdown = () => {
  return (
    <li>
      <div className="hs-dropdown relative inline-flex [--trigger:hover] [--auto-close:inside]">
        <button className="hs-dropdown-toggle inline-flex items-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-default-700 after:absolute after:inset-0 hover:text-primary hover:after:-bottom-10 lg:text-base">
          Mega Menu <LuChevronDown size={16} className="ms-2" />
        </button>
        <div className="hs-dropdown-menu absolute inset-x-0 top-full z-10 mt-4 hidden w-full min-w-full opacity-0 transition-[opacity,margin] duration-300 hs-dropdown-open:opacity-100">
          <div className="container">
            <div className="overflow-hidden rounded-lg border border-default-200 bg-white shadow-lg dark:bg-default-50">
              <div className="grid grid-cols-12">
                <div className="col-span-2 text-sm">
                  <div className="h-full w-full bg-default-100 px-6 py-10">
                    <nav aria-label="Tabs" className="flex flex-col space-y-3.5" data-hs-tabs-vertical="true" role="tablist">
                      <button
                        className="active inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#wraps"
                        role="tab"
                        type="button"
                      >
                        Wraps <LuChevronRight size={20} className="ms-auto" />
                      </button>
                      <button
                        className="inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#noodles"
                        role="tab"
                        type="button"
                      >
                        Noodles <LuChevronRight size={20} className="ms-auto" />
                      </button>
                      <button
                        className="inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#mexican"
                        role="tab"
                        type="button"
                      >
                        Mexican cuisine <LuChevronRight size={20} className="ms-auto" />
                      </button>
                      <button
                        className="inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#tacos"
                        role="tab"
                        type="button"
                      >
                        Tacos <LuChevronRight size={20} className="ms-auto" />
                      </button>
                      <button
                        className="inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#smart-meals"
                        role="tab"
                        type="button"
                      >
                        Smart Meals <LuChevronRight size={20} className="ms-auto" />
                      </button>
                      <button
                        className="inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#burger"
                        role="tab"
                        type="button"
                      >
                        Burger <LuChevronRight size={20} className="ms-auto" />
                      </button>
                      <button
                        className="inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#beverages-desserts"
                        role="tab"
                        type="button"
                      >
                        Beverages &amp; Desserts <LuChevronRight size={20} className="ms-auto" />
                      </button>
                    </nav>
                  </div>
                </div>
                <div className="col-span-10">
                  <div className="py-10">
                    <div id="wraps" role="tabpanel">
                      <div className="grid grid-cols-4 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Bean-Based Wraps</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Black Bean Wrap
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Refried Bean and Cheese Wrap
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Falafel Wrap
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Chickpea and Hummus Wrap
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Grilled Vegetable Wraps</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Grilled Veggie Wrap
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Roasted Red Pepper Wrap
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Portobello Mushroom Wrap
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Eggplant Parmesan Wrap
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Cheese and Spinach Wraps</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Spinach and Feta Wrap
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Paneer Tikka Wrap
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Caprese Wrap
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Chicken Wraps</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Grilled Chicken Wrap
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Buffalo Chicken Wrap
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Chicken Caesar Wrap
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Chicken Shawarma Wrap
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="hidden" id="noodles" role="tabpanel">
                      <div className="grid grid-cols-4 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Italian Pasta Dishes</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Spaghetti Bolognese
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Fettuccine Alfredo
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Lasagna
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Carbonara
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Penne alla Vodka
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Asian Noodle Dishes</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Ramen
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Pad Thai
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Pho
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Chow Mein
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Udon Stir-Fry
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Soba Noodles
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Lo Mein
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Chinese Noodle Dishes</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Beef Chow Fun
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Dan Dan Noodles
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Sesame Noodles
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Wonton Noodle Soup
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Zha Jiang Mian
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Japanese Noodle Dishes</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Yakisoba
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Tempura Udon
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Hiyashi Chukakies
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Sushi Rolls
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="hidden" id="mexican" role="tabpanel">
                      <div className="grid grid-cols-4 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Thai Noodle Dishes</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Drunken Noodles
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Tom Yum Noodle Soup
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Green Curry Noodles
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Glass Noodle Salad
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Indian Noodle Dishes</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Veg Hakka Noodles
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Maggi Noodles
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Masala Instant Noodles
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Korean Noodle Dishes</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Japchae
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Jajangmyeon
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Ramyeon
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Naengmyeon
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Western Noodle Dishes</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Chicken Noodle Soup
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Beef Stroganoff
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Tuna Noodle Casserole
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Macaroni and Cheese
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="hidden" id="tacos" role="tabpanel">
                      <div className="grid grid-cols-4 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Tacos</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Street Tacos
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Carnitas Tacos
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Barbacoa Tacos
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Fish Tacos
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Vegetarian Tacos
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Enchiladas</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Chicken Enchiladas
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Cheese Enchiladas
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Beef Enchiladas
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Suizas Enchiladas
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Tamales</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Pork Tamales
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Chicken Tamales
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Sweet Tamales
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Quesadillas</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Cheese Quesadillas
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Chicken Quesadillas
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Vegetarian Quesadillas
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="hidden" id="smart-meals" role="tabpanel">
                      <div className="grid grid-cols-3 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Balanced Meals</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Grilled chicken breast with steamed broccoli and quinoa
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Baked salmon with asparagus and brown rice
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Low-Carb Meals</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Cauliflower rice stir-fry with tofu and mixed vegetables
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Zucchini noodles with pesto and grilled shrimp
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">High-Protein Meals</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Lean beef or turkey burger with a side salad
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Greek yogurt parfait with berries and nuts
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="hidden" id="burger" role="tabpanel">
                      <div className="grid grid-cols-4 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Classic Burgers</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Cheeseburger
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Bacon Cheeseburger
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Double Cheeseburger
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Triple Cheeseburger
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Classic Veggie Burger
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Patty Variations</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Turkey Burger
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Chicken Burger
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Bison Burger
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Salmon Burger
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Black Bean Burger
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Portobello Mushroom Burger
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Flavorful Toppings</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                BBQ Burgerges
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Mushroom Swiss Burger
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Western/Cowboy Burger
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Blue Cheese Burger
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Jalapeño Burger
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Guacamole Burger
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Breakfast Burger</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Avocado Burger
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Caprese Burger
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Mediterranean Burger
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Tex-Mex Burger
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Reuben Burger
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="hidden" id="beverages-desserts" role="tabpanel">
                      <div className="grid grid-cols-4 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Coffee Based</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Espresso
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Cappuccino
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Latte
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Americano
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Mocha
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Macchiato
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Tea</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Black Tea
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Green Tea
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Herbal Tea
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Chai Tea
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Earl Grey
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Cakes</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Chocolate Cake
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Carrot Cake
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Red Velvet Cake
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Cheesecake
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">Cookies &amp; Pastries</h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Chocolate Chip Cookies
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Oatmeal Raisin Cookies
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Peanut Butter Cookies
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Sugar Cookies
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Croissant
                              </Link>
                            </li>
                            <li>
                              <Link href="" className="text-sm font-medium text-default-600 transition-all hover:text-primary">
                                Danish Pastry
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default MegaMenuDropdown
