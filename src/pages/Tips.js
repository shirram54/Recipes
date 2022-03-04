import "./Tips.css";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Tips() {
  return (
    <div className="tips-page">
      <div className="text-left">
        <div className="title-page">Cooking Tips & Tricks</div>
        <div className="title-tips">
          We've compiled this list of tips to make <br /> every time in the
          kitchen a successful one. Check ‘em out!
        </div>

        <div className="two-accordions">
          <div className="p">
            <div className="acor">
              <Accordion sx={{ width: 600 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b> Tips for Keeping Your Kitchen Clean</b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <ul className="paragraph">
                      <li>Keep it minimal</li>
                      <li>Start with a clean kitchen</li>
                      <li>Clean while you wait</li>
                      <li>Let the water out of the sink right away</li>
                      <li>Wipe out the sink after washing dishes</li>
                      <li> Clean up spills ASAP</li>
                      <li>Clean as you go</li>
                      <li>Have a compost/trash bowl</li>
                      <li>A place for everything</li>
                      <li> Have set days and times for doing things</li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 600 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b> Tips if you feel hopeless in the kitchen </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      {" "}
                      <ul className="paragraph">
                        <li>Start with one or two basic cookbooks</li>
                        <li>Keep the fancy equipment to a minimum</li>
                        <li>Don't go off-recipe until you're more confident</li>
                        <li>Good knives are a must</li>
                        <li>Start a collection of herbs and spices</li>
                        <li>Cook in bulk</li>
                        <li>Invest in a set of basic pans</li>
                        <li>Don't get frustrated</li>
                      </ul>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 600 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b> Tips to Help You Cook Faster </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      <ul>
                        <li>
                          Take one minute to mentally walk through what you're
                          cooking
                        </li>
                        <li>Set up appliances and heat the oven</li>
                        <li>Get the water boiling immediately</li>
                        <li>
                          Load a pan with ingredients from the pantry or fridge
                        </li>
                        <li>Clean your produce efficiently</li>
                        <li>Figure out your prepping order and multitask</li>
                      </ul>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ width: 600 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tip for storing leafy greens to keep them fresh </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      Leafy greens stay fresh longer if they're rinsed, wrapped
                      in a paper towel or tea towel, and refrigerated in a
                      container or sealed plastic bag. You can do this with
                      lettuce greens, bok choy, Swiss chard, kale and spinach.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 600 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tips for storing meat and poultry </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      <ul>
                        <li>
                          Store raw meat and poultry in clean, sealed containers
                          on the bottom shelf of the fridge
                        </li>
                        <li>
                          Follow any storage instructions on the label and do
                          not eat meat after its use by date
                        </li>
                        <li>
                          Keep cooked meat separate from raw meat and
                          ready-to-eat foods in general
                        </li>
                      </ul>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 600 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tips for Freezing Fresh Fish</b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      <ul>
                        <li>
                          If you don't plan to eat the fish within a couple of
                          days, freeze it instead
                        </li>
                        <li>Remove the fish from the store packaging</li>
                        <li>
                          Rinse it under cold water and use paper towels to dry
                          it
                        </li>
                        <li>Put the fish in freezer bags or containers</li>
                        <li>Label and date the bags or containers</li>
                        <li>Put in a freezer set at zero degrees or colder</li>
                      </ul>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 600 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b> Egg preparation tips</b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <ul className="paragraph">
                      <li>
                        {" "}
                        To create an egg wash, whisk together a large egg with
                        one tablespoon of water until smooth. Use as a glue to
                        seal pastries, then brush on top for a glossy appearance
                      </li>
                      <li>Learn all the different ways to cook an egg</li>
                      <li>
                        When poaching an egg, add a teaspoon of white vinegar to
                        simmering water to help keep the yolk from breaking
                      </li>
                      <li>
                        {" "}
                        For a great hardboiled egg every time, bring your pot to
                        a boil and then turn off the heat. Let your eggs sit in
                        the heated pot for 12 minutes and then transfer to cold
                        water
                      </li>
                      <li>
                        Crack eggs on a paper towel on the counter — no shells
                        and easy cleanup!
                      </li>
                      <li>
                        Make an ideal sunny-side egg by covering your pan with a
                        lid and letting the steam cook your egg. No flipping
                        required
                      </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ width: 600 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tips to Do Pasta Right</b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      <ul>
                        <li>Use a big enough pot</li>
                        <li>Use plenty of water</li>
                        <li>Season the pasta water</li>
                        <li>Let the water come to a boil first</li>
                        <li>Stir right away — and every couple minutes</li>
                        <li>
                          Don't rely solely on the cooking time on your pasta's
                          package
                        </li>
                        <li>Cook your pasta to just before al dente</li>
                        <li>Reserve the pasta water</li>
                      </ul>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ width: 600 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>The best onion cutting tips to prevent crying </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      <ul>
                        <li>Chill your onions</li>
                        <li>Fan away the fumes</li>
                        <li>Cut under cold water</li>
                        <li>Sharpen that knife</li>
                        <li>Work on your knife skills</li>
                        <li>Cut near an open flame</li>
                        <li>Cut off the top of the onion</li>
                        <li>Wear goggles</li>
                      </ul>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 600 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>
                        The best tips to prevent burning food on the stovetop{" "}
                      </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      <ul>
                        <li>
                          Turn down the heat. Once you get used to your pots and
                          stove top you’ll realize that “medium-high” only needs
                          to be at “medium” on your stove top for the same
                          results — especially on electric stove tops and if you
                          let the pot heat up quickly
                        </li>
                        <li>
                          Practice with what you’re cooking. When you cook
                          something, actually record how long you’re cooking it.
                          If it burns, don’t cook it so long next time
                        </li>
                        <li>Stir things regularly, as the recipe calls for</li>
                        <li>
                          Use cooking oils, olive oil is great for transferring
                          the heat to the food and adding flavor
                        </li>
                        <li>
                          Cover the pot and check it more often. When you cover
                          the pot it can help cook things quicker by keeping the
                          heat and steam in, it’ll cook more of the food that is
                          not in contact with the stove, so you won’t have to
                          cook things as long to get it cooked thoroughly
                        </li>
                        <li>Cook smaller things. it cooks better</li>
                        <li>
                          Use the oven, too. Before you get started, preheat the
                          oven to 425 or so. Sear the outsides of the food on
                          medium-high for about 3–5 minutes per side. Then
                          transfer oven safe pan to oven for 8–10 minutes
                          (depending on the size of the food). Make sure it’s
                          cooked to a safe temperature
                        </li>
                      </ul>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className="images-tips">
        <img
          src="https://medias.hashulchan.co.il/www/uploads/2020/11/22%D7%A1%D7%A0%D7%98%D7%94-%D7%A7%D7%AA%D7%A8%D7%99%D7%A0%D7%94-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%99%D7%A4%D7%99%D7%AA-%D7%A9%D7%9E%D7%97%D7%94-2000x1125.jpg"
          alt="salad"
          className="img-salad"
        ></img>
        <img
          src="https://medias.hashulchan.co.il/www/uploads/2021/12/1638698013_132789_7841-2000x1125.jpg"
          alt="cheers"
          className="img-cheers"
        ></img>
        <img
          src="https://medias.hashulchan.co.il/www/uploads/2019/11/Hamachleva-Benedict-5344-copy_n-2000x1125-1574176726.jpg"
          alt="table"
          className="img-table"
        ></img>
      </div>
    </div>
  );
}
export default Tips;
