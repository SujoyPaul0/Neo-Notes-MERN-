export function getAllNotes (req, res) {
    (req, res) => {
        res.status(200).send("you just fetched the notes");
    }
}

export function createNote(req, res) {
    res.status(201).json({message:"post created successfully"});
}

export function updateNote(req, res) {
    res.status(200).json({message:"Note updated successfully"})
}

export function deleteNote(req, res) {
    res.status(201).json({message:"Notes deleted successfully"});
    
}