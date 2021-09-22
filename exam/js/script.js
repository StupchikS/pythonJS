'use strict';

import {getDropdown} from "./countries";

const countries = ["Netherlands", "Japan", "Mongolia"];

const html = getDropdown(countries);

const select = document.querySelector("#countries-dropdown");
select.innerHTML = html;