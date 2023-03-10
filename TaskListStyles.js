import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  innerContainer: {
    flex: 1,
  },
  offlineContainer: {
    paddingHorizontal: Metrics.baseMargin,
    justifyContent: 'center', // Used to set Text Component Vertically Center
    alignItems: 'center',
    flex: 1,
  },
  DriverStatusContainer: {
    paddingTop: Metrics.statusBarHeight,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
  StatusSwitch: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 5,
    flex: 1,
  },
  userIcon: {
    paddingLeft: 30,
    paddingRight: 30,
    width: 20,
    height: 20,
  },
  offlineIcon: {
    width: 70,
    height: 70,
  },
  allDoneIcon: {
    width: 70,
    height: 70,
  },
  offDutyIconContainer: {
    borderColor: Colors.accent,
    borderWidth: 6,
    borderStyle: 'solid',
    borderRadius: 70,
    padding: 30,
    marginBottom: 20,
  },
  offlineMessage: {
    marginTop: 10,
    textAlign: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: Colors.background.secondary,
    marginTop: 5,
    width: '60%',
    alignSelf: 'center',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    backgroundColor: Colors.background.secondary,
  },
  tabSelected: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    backgroundColor: Colors.accent,
  },
  listSummary: {
    marginVertical: 10,
    alignItems: 'center',
  },
  betaImage: {
    position: 'absolute',
    zIndex: 100,
    height: 100,
    width: 100,
    resizeMode: 'contain',
    top: Metrics.statusBarHeight,
  },

  flatListContentContainer: {
    paddingBottom: Metrics.tabBarHeight,
    paddingHorizontal: 20,
  },
  historyView: {
    marginLeft: 35,
    height: '100%',
    padding: 5,
  },
  historyIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  btmParent: {
    backgroundColor: Colors.bottomSheetColor,
    height: '100%',
    padding: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerWrapper: {
    backgroundColor: Colors.bottomSheetColor,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    top: 1,
  },
  sheetDraggingBtn: {
    height: 5,
    width: 40,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.5)',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  submitButton: {
    height: 50,
    width: '95%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textArea: {
    backgroundColor: 'white',
    color: Colors.text.black,
    paddingVertical: 0,
    height: 600,
  },
  help: {
    marginRight: 20,
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 7,
    backgroundColor: '#ba050c',
  },
  modalCenterView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.windowTint,
  },
  modalContentView: {
    margin: 20,
    backgroundColor: Colors.bottomSheetColor,
    borderRadius: 20,
    padding: 35,
    width: Metrics.screenWidth - 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    right: -5,
    top: -5,
  },
});
