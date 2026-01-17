from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.vectorstores import Chroma

# Load documents
files = [
    "agri_data/crops.txt",
    "agri_data/climate_risks.txt",
    "agri_data/regions.txt"
]

documents = []
for file in files:
    loader = TextLoader(file)
    documents.extend(loader.load())

# Split into chunks
text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
texts = text_splitter.split_documents(documents)

# Local embeddings using Ollama
embeddings = OllamaEmbeddings(model="llama3")

# Create vector DB
db = Chroma.from_documents(texts, embeddings, persist_directory="db")

db.persist()

print("AgriShield knowledge base created successfully!")
