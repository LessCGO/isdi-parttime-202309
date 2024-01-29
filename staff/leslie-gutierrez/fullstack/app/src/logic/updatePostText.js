import validate from './helpers/validate'

function updatePostText(postId, text, callback) {
    validate.text(postId, 'post id')
    validate.text(text, 'text')

    // TODO call api
}

export default updatePostText