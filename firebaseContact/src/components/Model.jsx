import {createPortal} from 'react-dom'
import {AiOutlineClose} from 'react-icons/ai'

const Model=({isOpen,onClose,children})=>{
	return createPortal(
		<>
			{isOpen&&(
			<>
				<div className="m-auto z-50 relative min-h-[200px] max-w-[80%] bg-white">
					<div className="flex justify-end">
						<AiOutlineClose onClick={onClose} className="text-2xl self-end"/>
					</div>
					{children}
				</div>
				<div className="backdrop-blur h-screen w-screen absolute top-0 z-40"/>
			</>
			)}
		</>,
		document.getElementById("modal-root")
		)
}
export default Model;