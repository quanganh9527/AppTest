import React, { forwardRef, useImperativeHandle, useState } from 'react';
import {
	Modal as RNModal,
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { deviceWidth } from '../../helper';

const Modal = forwardRef((props, ref) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [label, setLabel] = useState('');
	const onRequestClose = () => {
		setModalVisible(false);
	};
	useImperativeHandle(ref, () => ({
		onOpen: () => setModalVisible(true),
		onclose: () => setModalVisible((prev) => !prev),
	}));
	return (
		<RNModal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				setModalVisible(!modalVisible);
			}}>
			<Pressable
				onPress={() => {
					setModalVisible(!modalVisible);
				}}
				style={styles.container}>
				<View style={styles.subContainer}>
					<TouchableWithoutFeedback>
						<View style={styles.modalView}>
							<Text style={styles.modalText}>
								{ref.current?.label || ''}
							</Text>
							<TouchableOpacity
								style={styles.button}
								onPress={() => setModalVisible(!modalVisible)}>
								<View style={styles.line} />
								<Text style={styles.textStyle}>Cancel</Text>
							</TouchableOpacity>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</Pressable>
		</RNModal>
	);
});

export default Modal;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.2)',
	},
	subContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalView: {
		backgroundColor: 'white',
		borderRadius: 20,
		width: deviceWidth / 2,
		height: deviceWidth / 3.5,
		justifyContent: 'space-between',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		justifyContent: 'flex-end',
		elevation: 2,
	},
	textStyle: {
		paddingVertical: 10,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		paddingTop: 30,
		textAlign: 'center',
	},
	line: {
		borderWidth: 0.3,
		borderColor: 'black',
		opacity: 0.3,
	},
});
