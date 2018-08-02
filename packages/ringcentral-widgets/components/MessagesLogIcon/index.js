import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MessagesLog from '../../assets/images/MessagesLog.svg';
import styles from './styles.scss';
import i18n from './i18n';

export default function MessagesLogIcon({
  conversationId,
  disabled,
  onClick,
  currentLocale,
}) {
  const tooltip = i18n.getString('log', currentLocale);
  return (
    <div
      className={styles.messagesLog}
      onClick={(e) => {
        e.stopPropagation();
        if (!disabled) onClick(conversationId);
      }}
      title={tooltip}>
      <MessagesLog className={styles.logIcon} />
    </div>
  );
}

MessagesLogIcon.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  conversationId: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

MessagesLogIcon.defaultProps = {
  conversationId: '',
  disabled: false,
  onClick() {},
};
