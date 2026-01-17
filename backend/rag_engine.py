from langchain_ollama import OllamaLLM
from langchain_ollama import OllamaEmbeddings
from langchain_community.vectorstores import Chroma
import re

# Load vector database
db = Chroma(
    persist_directory="db",
    embedding_function=OllamaEmbeddings(model="llama3")
)

# Always retrieve same number of documents
retriever = db.as_retriever(search_kwargs={"k": 3})

# Initialize LLM with temperature=0 for deterministic outputs
llm = OllamaLLM(
    model="llama3",
    temperature=0.0,  # CRITICAL: Makes outputs deterministic
    top_k=40,
    top_p=0.9,
    num_predict=512
)

def ask_agri_ai(question):
    # Retrieve documents
    docs = retriever.invoke(question)
    
    # Sort documents by content for consistency
    sorted_docs = sorted(docs, key=lambda x: x.page_content)
    
    context = "\n\n".join([doc.page_content for doc in sorted_docs])
    
    # SIMPLIFIED prompt - clearer format
    prompt = f"""You are AgriShield AI, an agricultural expert. Provide detailed recommendations.

CONTEXT:
{context}

QUESTION: {question}

Respond in this EXACT format:

**Risk Level:** [High/Medium/Low] Risk
**Primary Threat:** [Specific threat from context]
**Urgency:** [Immediate/Short-term/Long-term]

Important: Only include actual actionable steps in the bullets. 
Do NOT repeat section headers inside the bullet points.


##Immediate Actions (Next 7 days):##
* [Detailed step 1 - be specific about what to do, when, and how]
* [Detailed step 2 - include quantities, timing, methods]
* [Detailed step 3 - mention specific resources or techniques]

##Short-Term Solutions (Next 30 days):##
* [Solution 1 with implementation details]
* [Solution 2 with implementation details]

##Long-Term Strategies:##
* [Strategy 1 for next season]
* [Strategy 2 for resilience]

##Required Resources:##
- [Resource 1]
- [Resource 2]

##Cost Impact:## [Low/Medium/High]

##Expected Outcome:## [What implementing these will achieve]

IMPORTANT: 
1. Each bullet point should be 1-2 complete sentences
2. Be specific and actionable
3. Base on context but add practical farming advice
4. Aim for 150-200 words total
5. Use clear markdown formatting with ##bold## for headers and * for bullet points.
"""


    
    response = llm.invoke(prompt)
    
    # SIMPLE cleanup - no complex parsing
    response = response.strip()
    
    # Ensure it has basic structure
    if not response.startswith("**Risk Level:**"):
        # Add minimal structure if missing
        return f"**Risk Level:** High Risk\n**Primary Threat:** {context[:50]}...\n**Recommendation:**\n* {response[:100]}"
    
    return response

