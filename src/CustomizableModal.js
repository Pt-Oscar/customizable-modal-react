import { isNil } from 'lodash';
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

const CustomizableModal = (props) => {

    const {contentStyle, isVisible, content} = props;

    const nav = document.getElementById('custom-modal-content');
    let contentDiv = <div id="custom-modal-content" style={contentStyle}>{content}</div>;

    useEffect(()=>{
        if(isNil(nav) === false && isVisible === true ){
            nav.classList.toggle('active');
        } else if (isNil(nav) === false && isVisible === false) {
            nav.classList.remove('active')
        }
    },[isVisible, nav])

 
  return contentDiv;
}

const defaultProps = {
  isVisible: false,
  content: <div></div>,
};

CustomizableModal.propTypes = {
  isVisible: PropTypes.bool,
  content: PropTypes.element,
  contentStyle: PropTypes.object,
};

CustomizableModal.defaultProps = defaultProps;

export default CustomizableModal;