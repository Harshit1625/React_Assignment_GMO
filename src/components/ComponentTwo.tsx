import { FC, useState } from "react";
import { data } from "../util/data.ts";

import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ComponentTwo: FC = () => {
  const [checkedFirst, setCheckedFirst] = useState<boolean[]>([false, false]);
  const [checkedSecond, setCheckedSecond] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const [openFirst, setOpenFirst] = useState<boolean>(false);
  const [openSecond, setOpenSecond] = useState<boolean>(false);

  //handlers for first department

  const handleChangeF1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedFirst([event.target.checked, event.target.checked]);
  };

  const handleChangeFir =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = [...checkedFirst];
      newChecked[index] = event.target.checked;
      setCheckedFirst(newChecked);
    };

  //handlers for second department

  const handleChangeS1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedSecond([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };

  const handleChangeSec =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = [...checkedSecond];
      newChecked[index] = event.target.checked;
      setCheckedSecond(newChecked);
    };

  return (
    <div className="component-two-parent">
      <div className="component-two">
        {/* first department */}
        <div className="dropdown-div">
          <button
            className={openFirst ? "rotate" : "comp-btn"}
            onClick={() => setOpenFirst(!openFirst)}
          >
            <ArrowDropDownIcon fontSize="large" />
          </button>
          <FormControlLabel
            label={data[0].department}
            control={
              <Checkbox
                checked={checkedFirst[0] && checkedFirst[1]}
                indeterminate={checkedFirst[0] !== checkedFirst[1]}
                onChange={handleChangeF1}
              />
            }
          />
        </div>
        {openFirst && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              ml: 9,
              backgroundColor: "",
            }}
          >
            <FormControlLabel
              label={data[0].sub_departments[0]}
              control={
                <Checkbox
                  checked={checkedFirst[0]}
                  onChange={handleChangeFir(0)}
                />
              }
            />
            <FormControlLabel
              label={data[0].sub_departments[1]}
              control={
                <Checkbox
                  checked={checkedFirst[1]}
                  onChange={handleChangeFir(1)}
                />
              }
            />
          </Box>
        )}
      </div>

      {/* Second Department */}
      <div className="component-two">
        <div className="dropdown-div">
          <button
            className={openSecond ? "rotate" : "comp-btn"}
            onClick={() => setOpenSecond(!openSecond)}
          >
            <ArrowDropDownIcon fontSize="large" />
          </button>
          <FormControlLabel
            label={data[1].department}
            control={
              <Checkbox
                checked={checkedSecond.every(Boolean)}
                indeterminate={
                  !checkedSecond.every(Boolean) && checkedSecond.some(Boolean)
                }
                onChange={handleChangeS1}
              />
            }
          />
        </div>
        {openSecond && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              ml: 9,
              backgroundColor: "",
            }}
          >
            <FormControlLabel
              label={data[1].sub_departments[0]}
              control={
                <Checkbox
                  checked={checkedSecond[0]}
                  onChange={handleChangeSec(0)}
                />
              }
            />
            <FormControlLabel
              label={data[1].sub_departments[1]}
              control={
                <Checkbox
                  checked={checkedSecond[1]}
                  onChange={handleChangeSec(1)}
                />
              }
            />
            <FormControlLabel
              label={data[1].sub_departments[2]}
              control={
                <Checkbox
                  checked={checkedSecond[2]}
                  onChange={handleChangeSec(2)}
                />
              }
            />
          </Box>
        )}
      </div>
    </div>
  );
};

export default ComponentTwo;
