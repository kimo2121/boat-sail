import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import Popper from "@material-ui/core/Popper";
import Button from "../.../../MoreComponents/Button";
import "./customDropStyle.scss";
// core components

export default function CustomDropdown(props: any) {
  const [anchorEl, setAnchorEl] = React.useState<any>(null);
  const handleClick = (event: any) => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = (param: any) => {
    setAnchorEl(null);
    if (props && props.onClick) {
      props.onClick(param);
    }
  };
  const handleCloseAway = (event: any) => {
    if (anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
  };
  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    left,
    caret,
  } = props;
  //   const caretClasses = classNames({
  //     [classes.caret]: true,
  //     [classes.caretActive]: Boolean(anchorEl),
  //     [classes.caretRTL]: rtlActive,
  //   });
  //   const dropdownItem = classNames({
  //     [classes.dropdownItem]: true,
  //     [classes[hoverColor + "Hover"]]: true,
  //     [classes.noLiPadding]: noLiPadding,
  //     [classes.dropdownItemRTL]: rtlActive,
  //   });
  let icon = null;
  switch (typeof buttonIcon) {
    case "object":
      icon = <props.buttonIcon className="buttonIcon" />;
      break;
    case "string":
      icon = <Icon className="buttonIcon">{props.buttonIcon}</Icon>;
      break;
    default:
      icon = null;
      break;
  }
  return (
    <div className="topBarDropdown">
      <div>
        <Button
          aria-label="Notifications"
          aria-owns={anchorEl ? "menu-list" : null}
          aria-haspopup="true"
          {...buttonProps}
          onClick={handleClick}
          className="topBarDrop"
        >
          {icon}
          {buttonText !== undefined ? buttonText : null}
          {caret ? <i className="fas fa-caret-down" /> : null}
          {/* <i className="fas fa-caret-down"></i> */}
        </Button>
      </div>
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement={
          dropup
            ? left
              ? "top-start"
              : "top"
            : left
            ? "bottom-start"
            : "bottom"
        }
        className={classNames({})}
      >
        {() => (
          <Grow
            in={Boolean(anchorEl)}
            // id="menu-list"
            style={
              dropup
                ? { transformOrigin: "0 100% 0" }
                : { transformOrigin: "0 0 0" }
            }
          >
            <Paper className="dropdown">
              <ClickAwayListener onClickAway={handleCloseAway}>
                <MenuList role="menu" className="menuList">
                  {dropdownHeader !== undefined ? (
                    <MenuItem
                      onClick={() => handleClose(dropdownHeader)}
                      className="dropdownHeader"
                    >
                      {dropdownHeader}
                    </MenuItem>
                  ) : null}
                  {dropdownList.map((prop: any, key: any) => {
                    if (prop.divider) {
                      return (
                        <Divider
                          key={key}
                          onClick={() => handleClose("divider")}
                          className="dropdownDividerItem"
                        />
                      );
                    }
                    return (
                      <MenuItem
                        key={key}
                        onClick={() => handleClose(prop)}
                        className="dropdownItem"
                        style={{ color: "black" }}
                      >
                        {prop}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary",
};

CustomDropdown.propTypes = {
  hoverColor: PropTypes.oneOf([
    "black",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
  buttonText: PropTypes.node,
  buttonIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  dropdownList: PropTypes.array,
  buttonProps: PropTypes.object,
  dropup: PropTypes.bool,
  dropdownHeader: PropTypes.node,
  rtlActive: PropTypes.bool,
  caret: PropTypes.bool,
  left: PropTypes.bool,
  noLiPadding: PropTypes.bool,
  navDropdown: PropTypes.bool,
  // function that retuns the selected item
  onClick: PropTypes.func,
};
