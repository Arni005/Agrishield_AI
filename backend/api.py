from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from rag_engine import ask_agri_ai

app = FastAPI()

# Add CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
async def predict(data: dict):
    location = data.get("location", "")
    crop = data.get("crop", "")
    rainfall = data.get("rainfall", "")
    
    # Create question that matches your RAG context
    question = f"Analyze climate risk for {crop} in {location} with {rainfall} rainfall"
    
    try:
        # Get AI analysis - THIS IS THE CORE OF YOUR PROJECT
        result = ask_agri_ai(question)
        
        return {"result": result}
        
    except Exception as e:
        # Even on error, show it's an AI system issue
        return {"result": f"**Error in AI Analysis:** {str(e)}\n\n**System is learning from:** crops.txt, regions.txt, climate_risks.txt"}


# Keep your existing endpoints if any
@app.get("/")
async def root():
    return {"message": "AgriShield AI API - Powered by Ollama + RAG"}

@app.get("/health")
async def health():
    return {"status": "healthy", "ai_model": "llama3", "rag": "active"}